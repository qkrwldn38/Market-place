import { Container, Heading, Text } from '@chakra-ui/react'
import { useAddress } from '@thirdweb-dev/react'

export default function Info() {
  const address = useAddress()

  return (
    <Container maxW={'1200px'} p={5} bg="green.100">
      <Heading> Infomation </Heading>
      <Text>
        Developed by 자우자우 <br />
        deployed by using 0xa074c9994401274d8494d5f396f46B3F4bC78a37 (Account 1){' '}
        <br />
        Technology : Thirdweb, Ethers, Next.js, ChakraUI, Typescript
        <br />
      </Text>
      <br />
      <Heading> Contract Addresses </Heading>
      <Text>
        - MARKETPLACE_ADDRESS : 0xe3988dfb092290a80379D9B1113C0B4DcC231232{' '}
        <br />
        - NFT_COLLECTION_ADDRESS : 0x69a7Bba13B3a00AFa19c1360bAC17A5112B5f1Bf
        <br />
        - TOKEN_DROP_ADDRESS : 0xa7aF17F70a26a13b30DE0fF0c986918D881a3507 <br />
      </Text>
      <br />
      <Heading> Current Wallet </Heading>
      <Text>{address}</Text>
    </Container>
  )
}
