import { Button, Flex, Image, Stack, Text } from '@chakra-ui/react';
import React, { useCallback, useRef, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import { image, model, string } from '@tensorflow/tfjs';
import { resolve } from 'node:path/win32';
import toImageElement from './toImageElement';
import {useDropzone} from 'react-dropzone'
type ImageUploadProps = {
    selectedFile?: string;
    onSelectImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
    setSelectedFile: (value: string) => void;
};

const ImageUpload:React.FC<ImageUploadProps> = ({ selectedFile, onSelectImage, setSelectedFile }) => {
    

    const selectedFileRef = useRef<HTMLInputElement>(null);
    const [modelLoaded, setModelLoaded] = useState(false);
    const [loading, setLoading] = useState(false)
    const [isResults, setIsResults] = useState(false)

     const onDrop = useCallback((acceptedFiles: any) => {
        // Do something with the files
        const reader = new FileReader()

        if (acceptedFiles[0]) {
            reader.readAsDataURL(acceptedFiles[0])
        } 
        reader.onload = (readerEvent) => {
        if (readerEvent.target?.result) {
            setSelectedFile(readerEvent.target.result as string)
        }
    }


        console.log(acceptedFiles[0])



      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})


    const [results, setResults] = useState([] as any)
    // let results: any[] = []

    let model: any;

    let listResults: any

    const predictImage = async () => {
        setResults([])
        setLoading(true)
        const TARGET_CLASSES = {
            0: "a Lange and Sohne",
            1: "Audemars Piguet",
            2: "Breitling",
            3: "Cartier",
            4: "Hublot",
            5: "IWC",
            6: "Jaeger-LeCoultre",
            7: "Longines",
            8: "Omega",
            9: "Panerai",
            10: "Patek Philippe",
            11: "Rolex",
            12: "Sinn",
            13: "Tagheuer",
            14: "Tudor",
            15: "Zenith"
        }

        model = await tf.loadGraphModel('/model/model.json')
        setModelLoaded(true)
        if (!modelLoaded) { console.log("model not loaded yet ") }
        if (!selectedFile) { console.log("image not uploaded yet") }
        console.log(model)
        const imageElement = await toImageElement(selectedFile!)
        
        let tensor = tf.browser.fromPixels(imageElement, 3)
        .resizeNearestNeighbor([224, 224])
        .expandDims()
        .toFloat()

        let predictions = await model.predict(tensor).data()
        
        // console.log(predictions)
        let top3 = Array.from(predictions)
        .map( (p, i) => {
            return {
                probability: p as number,
                className: (TARGET_CLASSES as any)[i] as String,
            };
        }).sort( (a,b) => {
            return b.probability - a.probability
        }).slice(0,3)

        const sum = top3[0].probability + top3[1].probability + top3[2].probability

        console.log(predictions)
        top3.forEach(function (p) {
            p.probability = p.probability / sum
        })
        setResults(top3)
        // console.log(results)
        setLoading(false)
        setIsResults(true)

        
        console.log(results)
    }

    return (
        <>
        <Flex direction="column" alignItems="center" justifyContent="center" height="400px" width="1000px" margin="auto"  >
            {selectedFile ? (
                <>
                    <Image mt={10} src={selectedFile} maxWidth="400px" maxHeight="280px" />
                    <Stack mt={8} direction="row">
                        <Button isLoading={loading} onClick={predictImage}>PREDICT!</Button>
                        <Button onClick={() => {setSelectedFile(""); setIsResults(false)}}>New Image</Button>
                    </Stack>

                    
                </>
            ) : (
                <>
                <Flex {...getRootProps()} height="280px" width="400px" alignItems="center" justifyContent="center" border="5px dashed white" bg={isDragActive ? "#a6c9f7" : "brand.300"}>
                    <input {...getInputProps()} />
                    <Stack>
                        <Button onClick={() => selectedFileRef.current?.click()} borderRadius="30px" width="170px" margin="auto" mt={5}>Upload Image</Button>
                        <Text color="white" fontSize="11pt">Accepted file types: jpg, png, svg.</Text>
                    </Stack>
                    <input onChange={onSelectImage} ref={selectedFileRef} type="file" hidden />
                </Flex>
                <Flex justifyContent="center" padding="6px 0px" width="60%" maxWidth="700px" margin="auto">
                <Text textAlign="center"  color="white" fontSize="18pt">Upload an image of a watch using the button above or drag and drop a file into the dashed field.</Text>
                
                </Flex>
                </>
            )}
            
        </Flex>
            {selectedFile && isResults && results.map((p: any) => {
                return (
                    <>
                        <Text color="white" fontSize="18pt">{p.className}: {p.probability}</Text>
                    </>
                )
            }
            )}
        </>
    )
}
export default ImageUpload;