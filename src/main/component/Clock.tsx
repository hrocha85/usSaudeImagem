import {
    Box,
    Text
    //useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from 'react';
const Clock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const formatDate = (date: Date) => {
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();
        return `${day} de ${month} de ${year} às ${hour}:${minute}:${second}`;
    };

    return (
        <Box display={['none', 'block']}>
            <Text textColor={'rgba(0, 0, 0, 0.64)'} fontSize={"16px"} fontWeight={400}>
                {formatDate(currentTime)}
            </Text>
        </Box>
    );
};

export default Clock;
