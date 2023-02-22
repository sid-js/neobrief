import React from "react";
import { Interweave, Markup } from "interweave";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Background from "../../public/bg.jpg";
import { polyfill } from "interweave-ssr";
import { useRouter } from "next/router";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import Head from "next/head";
import MainLayout from "@/components/MainLayout";
import {HiArrowLeft} from "react-icons/hi2";

polyfill();

const BriefPage = ({ Brief }) => {
    const router = useRouter();
  console.log(Brief);

  return (
    <MainLayout>
      <main className="px-2 lg:px-32 py-2 font-urbanist overflow-hidden relative">
        <Head>
          <title>{Brief.title}</title>
        </Head>
        <Image src={Background} fill className="object-cover -z-50" alt="Bg" />

        <Navbar />
        <div className="px-2 lg:px-28 py-2 lg:py-6 w-full flex flex-col gap-4 justify-center items-start">
            <div>
                <button onClick={()=> {router.back()}} className="px-6 py-1 bg-slate-200 rounded-xl text-black text-xl flex flex-row gap-2 items-center hover:bg-yellow-400 hover:scale-105 transition duration-300"><HiArrowLeft/>Back</button>
            </div>
          <article className="prose prose-base prose-h1:text-3xl lg:prose-h1:text-5xl lg:prose-lg font-urbanist p-8 bg-white max-w-max drop-shadow-lg rounded-2xl">
            <Markup content={Brief.content} />
          </article>
        </div>
      </main>
    </MainLayout>
  );
};

export default BriefPage;

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps = async (ctx) => {
  const id = ctx.params.id;
  const supabaseServer = createServerSupabaseClient(ctx);
  let { data: brief, error } = await supabaseServer
    .from("briefs")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    console.error(error);
  }
  if (brief) {
    return {
      props: {
        Brief: brief,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};
