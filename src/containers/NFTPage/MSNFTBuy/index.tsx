import { Button, Flex } from "@chakra-ui/react";
import { Typography } from "@src/components/Typography";
import Image from "next/image";
import { useRouter } from "next/router";
const MSNFTBuy = () => {
  
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
      className="xs:flex-col sm:flex-col lg:flex-row relative z-1"
    >
      
      {/* <Image src=""/> */}
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
            // right: "-100px",
            zIndex: 1,
          }}
          priority
        />
        <Flex
          sx={{
            position: "relative",
            width: "100%",
          }}
         className="border-2 border-[#555C6D] lg:mr-[50px] mr-[0px] rounded-lg relative">
        <Image
          src="/images/MS_NFT.jpg"
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
        {/* <Typography>sdf</Typography> */}
        
          <Typography opacity={"20%"} type="headline4" className=" absolute bottom-0 left-2">Monsters Syndicate NFT</Typography>
        
        </Flex>
      </Flex>
      <Flex flexDirection={"column"} className="xs:mb-[28px] xl:mb-[0px] lg:max-w-[600px]">
        <Typography
          type="headline1"
          as="span"
          lineHeight={"64px"}
          color="text.success"
        >
          Monsters Syndicate{" "}
          {/* <Typography type="headline1" as="span" color="text.success">
            CoinAI
          </Typography> */}
        </Typography>
        <Flex background={
          "radial-gradient(213.29% 109.87% at 8.93% -0.00%, rgba(36, 100, 125, 0.50) 0%, rgba(28, 34, 37, 0.50) 34.76%, rgba(19, 19, 20, 0.50) 63.42%)"
        }
         flexDirection={"column"} className=" border-[1px] border-gray-500 rounded-lg pr-2 pl-5 py-2 my-1 border-l-4 border-l-green-400">
          <Typography type="headline4" as="span" color="text.primary">
            Benefit:          
          </Typography>
          <Typography type="body1" color="text.read">
            Holders of Monsters Syndicate NFTs gain exclusive access to private social channels, fostering a sense of community and providing a platform for networking and sharing insights. Monsters Syndicate NFT holders can unlock unique vanity profile pictures and obtain a special role within the Discord community, showcasing their status as esteemed holders.
          </Typography>
        </Flex>
        <Flex flexDirection={"column"} className=" border-[1px] border-gray-500 rounded-lg pr-2 pl-5 py-2 my-1 border-l-4 border-l-green-400">
          <Typography type="headline4" as="span" color="text.primary">
            Deposit Allowance:          
          </Typography>
          <Typography type="body1" color="text.read">
            Each Monsters Syndicate NFT allows the holder to deposit up to 5,000 USDT.
          </Typography>
        </Flex>
        <Flex flexDirection={"column"} className=" border-[1px] border-gray-500 rounded-lg pr-2 pl-5 py-2 my-1 border-l-4 border-l-green-400">
        <Typography type="headline4" as="span" color="text.primary">
          Additional Yield:        
        </Typography>
        <Typography type="body1" color="text.read">
          Monsters Syndicate NFTs offer additional yield up to 200% APR.
        </Typography>
        </Flex>
        <Flex className=" border-[1px] border-gray-500 rounded-lg py-2 pl-5 pr-2 my-1 border-l-4 border-l-green-400">

          <Flex className="flex-col" >
            <Typography type="headline4" as="span" color="text.primary" >
              1000 {" "}
              <Typography type="body1" as="span" color="text.primary">
                USDT       
              </Typography>          
            </Typography>
            <Typography type="body1" as="span" color="text.success">
              Minting Price        
            </Typography>
          </Flex>
          
          <Flex className="flex-col mx-auto" >
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
            className="my-auto text-white hover:text-[black]"   
            // h={"full"}         
          >
            Buy
          </Button>
        </Flex>
      </Flex>
      
    </Flex>
  );
};
export default MSNFTBuy;
