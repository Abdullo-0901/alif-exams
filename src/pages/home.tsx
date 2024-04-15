import { Container } from "@mui/material";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { getProduct } from "../entity/get-product.entity";

const Home = () => {
  const {
    data = [],
    refetch,
    isLoading,
  } = useQuery(["getcategory"], () => getProduct(), {
    onError: (err) => {
      toast.error((err as any).response.data.message);
    },
  });
  console.log(data);

  return (
    <Container>
      <section className="flex flex-col space-y-12 ">
        <h1 className="text-5xl font-bold text-center ">Abdulloh Shop</h1>

        <div className="grid grid-cols-1 gap-y-10  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8"></div>
      </section>
    </Container>
  );
};

export default Home;
