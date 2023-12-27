import { Button, Flex } from "@chakra-ui/react";
import { Typography } from "@src/components/Typography";
import Image from "next/image";
import { useRouter } from "next/router";
const GPNFTBuy = () => {
  
  const router = useRouter();
  
  return (
    <Flex
      w="100%"
      maxW={"1200px"}
      mx="auto"
      justifyContent={"space-between"}
      mt={["3em"]}
      p={["24px"]}
      
      //   flexDirection={["column", "column", "row"]}
      className="xs:flex-col sm:flex-col-reverse lg:flex-row relative z-1"
    >
      
      <Flex flexDirection={"column"} className="xs:mb-[28px] xl:mb-[0px] lg:max-w-[600px] ">
        <Typography
          type="headline1"
          as="span"
          lineHeight={"64px"}
          color="text.success"
        >
          Generation Prime{" "}
          {/* <Typography type="headline1" as="span" color="text.success">
            CoinAI
          </Typography> */}
        </Typography>
        <Flex background={
          "radial-gradient(213.29% 109.87% at 8.93% -0.00%, rgba(36, 100, 125, 0.50) 0%, rgba(28, 34, 37, 0.50) 34.76%, rgba(19, 19, 20, 0.50) 63.42%)"
        }
         flexDirection={"column"} className=" border-[1px] border-gray-500 rounded-lg py-2 pl-5 pr-2 my-1 border-l-4 border-l-green-400">
          <Typography type="headline4" as="span" color="text.primary">
            Benefit:          
          </Typography>
          <Typography type="body1" color="text.read" mb="8px">
            Holders of Generation Prime NFTs enjoy exclusive benefits such as extra $MKT tokens as a bonus with each MKT purchase, tax exemption on deposits made to CoinAI Pools, extra CoinAI Pool deposit allowance of up to 20,000 USDT, governance vote power, access to private social channels, and vanity profile pictures and Discord role.
          </Typography>
        </Flex>
        <Flex flexDirection={"column"} className=" border-[1px] border-gray-500 rounded-lg py-2 pl-5 pr-2 my-1 border-l-4 border-l-green-400">
          <Typography type="headline4" as="span" color="text.primary">
            Deposit Allowance:          
          </Typography>
          <Typography type="body1" color="text.read" mb="8px">
            Each Generation Prime NFT allows the holder to deposit up to 10,000 USDT.
          </Typography>
        </Flex>
        <Flex flexDirection={"column"} className=" border-[1px] border-gray-500 rounded-lg py-2 pl-5 pr-2 my-1 border-l-4 border-l-green-400">

          <Typography type="headline4" as="span" color="text.primary">
            Additional Yield:        
          </Typography>
          <Typography type="body1" color="text.read" mb="8px" >
            Generation Prime NFTs offer additional yield up to 365% APR
          </Typography>
        </Flex>
        <Flex className=" border-[1px] border-gray-500 rounded-lg py-2 pl-5 pr-2 my-1 border-l-4 border-l-green-400">
          <Flex className="flex-col">
            <Typography type="headline4" as="span" color="text.primary" >
              3500 {" "}
              <Typography type="body1" as="span" color="text.primary">
                USDT       
              </Typography>          
            </Typography>
            <Typography type="body1" as="span" color="text.success">
              Minting Price        
            </Typography>
          </Flex>
          
          <Flex className="flex-col mx-auto">
            <Typography type="headline4" as="span" color="text.primary" >
              365          
            </Typography>
            <Typography type="body1" as="span" color="text.success">
              Total Unique Copies      
            </Typography>
          </Flex>
          <Button
            // className={className}
            colorScheme="brand"
            size="md"
            bgColor="bg.brand !important"
            rounded="full"
            px={8}
            py={7}
            // onClick={}
            color="white"
            fontSize={20}
            borderRadius={"8px"}
            zIndex={11}
            className="my-auto"  
          >
            Buy
          </Button>
        </Flex>
      </Flex>
      <Flex
        sx={{
          position: "relative",
          width: "100%",
        }}
      >
        <Image
          src="/images/blur-ai.png"
          width={531}
          height={637}
          alt="blur-solution"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            // left: "-100px",
            zIndex: 0,
          }}
          priority
        />
        <Flex
          sx={{
            position: "relative",
            width: "100%",
          }}
         className="border-2 border-[#555C6D] lg:ml-[50px] ml-[0px] rounded-lg relative">
        <Image
          src="/images/GP_NFT.jpg"
          width={630}
          height={560}
          
          alt="nft_description"
          style={{
            width: "100%",
            height: "100%",
          }}
          className="p-[2px] min-w-[330px] rounded-lg"
          priority
        />
        </Flex>
        <Typography opacity={"20%"} textColor={"white"} type="headline4" className=" absolute bottom-0 right-2">Generation Prime NFT</Typography>
      </Flex>
    </Flex>
  );
};
export default GPNFTBuy;
