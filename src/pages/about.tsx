import { Box, Button, Container, Rating, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Slickdots from "../components/slickdots";
import { getProductById } from "../entity/get-product-byid.entity";

function About() {
  const { id } = useParams();
  const { data } = useQuery(["product", id], () => getProductById(Number(id)));

  return (
    <Container maxWidth="xl" className="pt-[80px]">
      <div className="mt-10 flex gap-16">
        <Slickdots product={data} />
        <div className="w-full">
          <Box className="border-b-[1px] border-[#3a539d84] pb-2">
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography className="text-[#73787d]">{data?.title}</Typography>
              <Typography className="text-[26px]">
                <span className="text-[#73787d]">Код товара:</span>{" "}
                <span className="text-[#ffbe1f]"> {data?.id} </span>
              </Typography>
              <Typography>
                <span className="text-[#73787d]"> Бренд : </span>
                <span className="text-[#ffbe1f]">{data?.category?.name}</span>
              </Typography>
            </Box>
            <Box className="mt-3 flex justify-between w-full">
              <Typography variant="h3" className="text-[#ffbe1f]">
                {data?.price} с
              </Typography>
              <Box className="flex items-center gap-2">
                <Rating value={4} readOnly />
                <div>
                  <span className="text-colLight font-[500]">{data?.id}</span>{" "}
                  <span>отзывов</span>
                </div>
              </Box>
            </Box>
          </Box>
          <Box className="mt-3">
            <Typography variant="h5" className="text-[17px]">
              Краткое описание:
            </Typography>
            <div className="text-[15px] leading-6 text-[#727272] mt-2">
              {data?.description}
            </div>
            <Button
              sx={{
                backgroundColor: "#eab308",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "55px",

                "&:hover": {
                  backgroundColor: "orange",
                },
              }}
            >
              <span>
                <img className="w-[20px]" src="/card.svg" alt="" />
              </span>
              <span className="!text-[12px] text-black" aria-label="Cart link">
                В корзину
              </span>
            </Button>
          </Box>
        </div>
      </div>
    </Container>
  );
}

export default About;
