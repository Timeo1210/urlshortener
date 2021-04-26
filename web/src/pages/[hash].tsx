import React from "react";
import axios from "axios";
import {
  GetServerSidePropsContext /*InferGetServerSidePropsType*/,
} from "next";
import { GetLinkByHashResponseDTO } from "@/interfaces/dtos/getLinkByHash/getLinkByHash.response.dto";

// const HashPage = ({
//   link,
// }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
//   return <p>Hash: {link}</p>;
// };
const HashPage = () => <></>;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    const query = await axios({
      method: "GET",
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      url: `${context.params?.hash}`,
    });

    if (!(query.data as GetLinkByHashResponseDTO).link) {
      return {
        redirect: { permanent: true, destination: "/404" },
      };
    }

    return {
      redirect: {
        permanent: true,
        destination: (query.data as GetLinkByHashResponseDTO).link,
      },
    };
  } catch (e) {
    return { redirect: { permanent: true, destination: "/404" } };
  }
};

export default HashPage;
