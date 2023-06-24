import {  Box,
    Card,
    CardBody,
    Heading,
    CardHeader,
    Stack,
    StackDivider,
    Text } from '@chakra-ui/react';


const CreateCard = ({ data, isHighest})=> {
    const {
        maxEstimatedDiameter,
        numberOfPotentiallyHazardousNEOs,
        fastestNEO,
        closestNEO,
        date
    } = data;
    
    return (
        
        <Card 
            className='card'
            opacity="0.87"
            bgColor={isHighest ? "#ef5350" : "white"}
            color={isHighest ? "white" : "black"}>
            <CardHeader> <Heading className='heading' as='h4' size='xs'>{date}</Heading>
            </CardHeader>
            <CardBody >
            <Stack divider={<StackDivider />} spacing='-12'>
                <Box>
                    <Heading as='h5' size='xs'>
                       {maxEstimatedDiameter} km
                    </Heading>
                    
                     <Text className='text' fontSize='xs'>
                    max estimated diameter of NEO in kilometers per day
                    </Text>
                    
                </Box>
                <Box>
                    <Heading as='h5' size='xs'>
                    {numberOfPotentiallyHazardousNEOs} pcs
                    </Heading>
                    <Text fontSize='xs'>
                    number of potentially hazardous NEOs per day
                    </Text>
                </Box>
                 <Box>
                    <Heading as='h5' size='xs'>
                     {closestNEO} km
                    </Heading>
                    <Text fontSize='xs'>
                    closest NEO
                    </Text>
                </Box>
                <Box>
                     <Heading as='h5' size='xs'>
                     {fastestNEO} kph
                    </Heading>
                    <Text fontSize='xs'>
                    fastest NEO
                    </Text>
                </Box>
                </Stack>
                </CardBody>
                </Card>
                
    )
}

export default CreateCard;