import { Flex, Heading } from '@chakra-ui/react'

export const Hero = ({ title }: { title: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="100vh"
    bgClip="text"
  >
    <Heading fontSize="6vw" color="black">{title}</Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'Il blog di nonna Lina',
}
