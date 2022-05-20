import { Button, Flex, Image, Stack } from '@chakra-ui/react';
import React, { useRef } from 'react';

type ImageUploadProps = {
    selectedFile?: string;
    onSelectImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
    setSelectedFile: (value: string) => void;
};

const ImageUpload:React.FC<ImageUploadProps> = ({ selectedFile, onSelectImage, setSelectedFile }) => {
    
    const selectedFileRef = useRef<HTMLInputElement>(null);


    return (
        <Flex direction="column" alignItems="center" justifyContent="center" height="280px" width="400px" margin="auto" bg="brand.300" border="5px dashed white">
            {selectedFile ? (
                <>
                    <Image src={selectedFile} maxWidth="350px" maxHeight="180px" />
                    <Stack mt={3} direction="row">
                        <Button>CLASSIFY!</Button>
                        <Button onClick={() => setSelectedFile("")}>New Image</Button>
                    </Stack>
                </>
            ) : (
                <>
                    <Button onClick={() => selectedFileRef.current?.click()} borderRadius="30px">Upload Image</Button>
            <input onChange={onSelectImage} ref={selectedFileRef} type="file" hidden />
                </>
            )}
        </Flex>
    )
}
export default ImageUpload;