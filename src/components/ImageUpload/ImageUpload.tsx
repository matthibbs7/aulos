import { Button, Flex, Image, Stack, Text } from '@chakra-ui/react';
import React, { useRef } from 'react';

type ImageUploadProps = {
    selectedFile?: string;
    onSelectImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
    setSelectedFile: (value: string) => void;
};

const ImageUpload:React.FC<ImageUploadProps> = ({ selectedFile, onSelectImage, setSelectedFile }) => {
    
    const selectedFileRef = useRef<HTMLInputElement>(null);


    return (
        <Flex direction="column" alignItems="center" justifyContent="center" height="400px" width="1000px" margin="auto"  >
            {selectedFile ? (
                <>
                    <Image mt={10} src={selectedFile} maxWidth="400px" maxHeight="280px" />
                    <Stack mt={8} direction="row">
                        <Button>CLASSIFY!</Button>
                        <Button onClick={() => setSelectedFile("")}>New Image</Button>
                    </Stack>
                </>
            ) : (
                <>
                <Flex height="280px" width="400px" alignItems="center" justifyContent="center" border="5px dashed white" bg="brand.300">
                    <Button onClick={() => selectedFileRef.current?.click()} borderRadius="30px">Upload Image</Button>
                    <input onChange={onSelectImage} ref={selectedFileRef} type="file" hidden />
                </Flex>
                <Flex justifyContent="center" padding="6px 0px" width="60%" maxWidth="700px" margin="auto">
                <Text mt={-6} color="white" fontSize="18pt">Upload an image of a watch using the button above.</Text>
                
                </Flex>
                </>
            )}
        </Flex>
    )
}
export default ImageUpload;