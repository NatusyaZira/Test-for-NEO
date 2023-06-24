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
        opacity="0.87"
      bgColor={isHighest ? "#C53030" : "white"}
      color={isHighest ? "white" : "black"}>
            <CardHeader> <Heading className='heading' size='xs'>{date}</Heading>
            </CardHeader>
            <CardBody className='card'>
            <Stack divider={<StackDivider />} spacing='4'>
                <Box>
                    <Heading as='h3' size='xs'>
                       {maxEstimatedDiameter} km
                    </Heading>
                     <Text>
                    max estimated diameter of NEO in kilometers for the day
                    </Text>
                </Box>
                <Box>
                    <Heading as='h3' size='xs'>
                    {numberOfPotentiallyHazardousNEOs} pcs
                    </Heading>
                    <Text>
                    number of potentially hazardous NEOs per day
                    </Text>
                </Box>
                 <Box>
                    <Heading as='h3' size='xs'>
                     {closestNEO} km
                    </Heading>
                    <Text>
                    closest NEO
                    </Text>
                </Box>
                <Box>
                     <Heading as='h3' size='xs'>
                     {fastestNEO} kph
                    </Heading>
                    <Text>
                    fastest NEO
                    </Text>
                </Box>
                </Stack>
                </CardBody>
                </Card>

    )
}

export default CreateCard;