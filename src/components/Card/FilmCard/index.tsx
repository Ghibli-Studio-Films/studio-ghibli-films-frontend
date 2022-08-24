import { useState } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";
import { Box, VStack, HStack, Image, Text, Heading } from "@chakra-ui/react";
import cardRightSide from "../../../assets/img/card-right-side.svg";
import { IFilmCard } from "../../../interfaces";

export const FilmCard = ({ film }: IFilmCard) => {
  const [isInfoOpen, setIsInfoOpen] = useState<boolean>(false);

  const handleSliderTransition = () => setIsInfoOpen((s) => !s);

  return (
    <Box
      onMouseEnter={() => handleSliderTransition()}
      onMouseOut={() => handleSliderTransition()}
      display="flex"
      w="300px"
      h="500px"
      borderRadius="40px"
      bgImage={film.image}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      overflow="hidden"
      boxShadow="
      0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048),
      0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072),
      0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12)"
    >
      <Box
        sx={{
          w: "100%",
          position: "relative",
          transform: isInfoOpen ? "translateY(20px)" : "translateY(340px)",
          transition: "all 1s ease-in-out",
        }}
        pointerEvents="none"
      >
        <Box sx={{ transform: "translateY(0.5px)" }}>
          <Image
            sx={{
              filter: isInfoOpen ? "opacity(55%)" : "opacity(100%)",
              transition: "all 0.5s ease-in-out",
            }}
            src={cardRightSide}
            marginLeft="auto"
          />
        </Box>
        <VStack
          sx={{
            transition: "all 0.5s ease-in-out",
          }}
          bg={`${isInfoOpen ? "secondary.70095" : "secondary.700"}`}
          w="100%"
          height="100%"
          borderTopLeftRadius="40px"
          borderBottomLeftRadius="40px"
          borderBottomRightRadius="40px"
        >
          <AnimatePresence>
            {isInfoOpen ? (
              <motion.div
                key="info"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <VStack spacing="10px" w="100%" p="20px 20px">
                  <Heading as="h2" color="white" fontSize="md">
                    {film.title}
                  </Heading>

                  <Heading as="h2" color="white" fontSize="md">
                    {film.original_title}
                  </Heading>

                  <Image
                    w="80px"
                    h="80px"
                    borderRadius="100%"
                    src={film.movie_banner}
                  />

                  <Box w="100%">
                    <Heading
                      as="h3"
                      color="white"
                      fontSize="md"
                      fontWeight="500"
                    >
                      Description:
                    </Heading>

                    <Text
                      sx={{
                        display: "-webkit-box",
                        color: "white",
                        fontSize: "md",
                        fontWeight: "400",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: "3",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                      }}
                    >
                      {film.description}
                    </Text>
                  </Box>

                  <HStack w="100%" justifyContent="space-around">
                    <Box>
                      <Heading
                        as="h3"
                        color="white"
                        textAlign="center"
                        fontSize="md"
                        fontWeight="500"
                      >
                        Director:
                      </Heading>

                      <Text
                        color="white"
                        textAlign="center"
                        fontSize="md"
                        fontWeight="400"
                      >
                        {film.director}
                      </Text>
                    </Box>

                    <Box>
                      <Heading
                        as="h3"
                        color="white"
                        textAlign="center"
                        fontSize="md"
                        fontWeight="500"
                      >
                        Producer:
                      </Heading>

                      <Text
                        color="white"
                        textAlign="center"
                        fontSize="md"
                        fontWeight="400"
                      >
                        {film.producer}
                      </Text>
                    </Box>
                  </HStack>

                  <HStack
                    w="100%"
                    spacing="1rem"
                    justifyContent="space-between"
                  >
                    <Box>
                      <Heading
                        as="h3"
                        color="white"
                        textAlign="center"
                        fontSize="md"
                        fontWeight="500"
                      >
                        Release:
                      </Heading>

                      <Text
                        color="white"
                        textAlign="center"
                        fontSize="md"
                        fontWeight="400"
                      >
                        {film.release_date}
                      </Text>
                    </Box>

                    <Box>
                      <Heading
                        as="h3"
                        color="white"
                        textAlign="center"
                        fontSize="md"
                        fontWeight="500"
                      >
                        Duration:
                      </Heading>

                      <Text
                        color="white"
                        textAlign="center"
                        fontSize="md"
                        fontWeight="400"
                      >
                        {film.running_time} min
                      </Text>
                    </Box>

                    <Box>
                      <Heading
                        as="h3"
                        color="white"
                        textAlign="center"
                        fontSize="md"
                        fontWeight="500"
                      >
                        Rate:
                      </Heading>

                      <Text
                        color="white"
                        textAlign="center"
                        fontSize="md"
                        fontWeight="400"
                      >
                        {film.rt_score}
                      </Text>
                    </Box>
                  </HStack>
                </VStack>
              </motion.div>
            ) : (
              <motion.div
                key="heading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Heading
                  as="h2"
                  color="white"
                  textAlign="center"
                  fontSize="lg"
                  whiteSpace="nowrap"
                  textOverflow="ellipsis"
                  overflow="hidden"
                  maxW="100%"
                  p="20px 20px"
                >
                  {film.title}
                </Heading>
              </motion.div>
            )}
          </AnimatePresence>
        </VStack>
      </Box>
    </Box>
  );
};
