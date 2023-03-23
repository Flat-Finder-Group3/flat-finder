// import { Card } from "antd";
import Listing from "@/models/Listing";
import {
  ChakraProvider,
  Stack,
  CardBody,
  CardFooter,
  Heading,
  Button,
  Image,
  Card,
  Text,
} from "@chakra-ui/react";
const SearchResultPage = (props) => {
  const listings = props.listings;
  const displayListings = listings.map((listing) => listing);

  return (
    <ChakraProvider>
      {displayListings.map((listing) => (
        <Card
          key={listing.id}
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", md: "150px" }}
            src={listing.images[0]}
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>
              <Heading size="lg">{listing.title}</Heading>
              <Heading as="h5" size="xs" style={{ textAlign: "right" }}>
                {listing.description}
              </Heading>
              <Text py="1">Bathroom and bedrooms</Text>
              {/* <Text py="1">Availability</Text>
                <Text py="1">Type of stay</Text> */}
            </CardBody>

            <CardFooter>
              <Button
                variant="solid"
                //   colorScheme="blue"
                style={{ color: "white", backgroundColor: "#1677ff" }}
              >
                More info
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      ))}
    </ChakraProvider>

    // <ChakraProvider>
    //   <Card
    //     direction={{ base: "column", sm: "row" }}
    //     overflow="hidden"
    //     variant="outline"
    //   >
    //     <Image
    //       objectFit="cover"
    //       maxW={{ base: "100%", sm: "200px" }}
    //       src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
    //       alt="Caffe Latte"
    //     />

    //     <Stack>
    //       <CardBody>
    //         <Heading size="lg">Property Title</Heading>
    //         <Heading as="h5" size="xs" style={{ textAlign: "right" }}>
    //           Property location
    //         </Heading>
    //         <Text py="1">Bathroom and bedrooms</Text>
    //         {/* <Text py="1">Availability</Text>
    //         <Text py="1">Type of stay</Text> */}
    //       </CardBody>

    //       <CardFooter>
    //         <Button
    //           variant="solid"
    //           //   colorScheme="blue"
    //           style={{ color: "white", backgroundColor: "#1677ff" }}
    //         >
    //           More info
    //         </Button>
    //       </CardFooter>
    //     </Stack>
    //   </Card>
    // </ChakraProvider>
  );
};

export default SearchResultPage;