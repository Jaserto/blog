import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { orderByDate } from "../lib/order-by-date";

import { getAllFilesMetadata } from "../lib/mdx";

const StyledDiv = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  color: white;
  flex-direction: column;
  align-items: center;

  .div {
    display: flex;
    flex-direction: column;
    height: 100%;
    width:75%;
  }

  .div2 {
    cursor:pointer;
    width:100%;
    display: flex;
    height: 100%;
    margin-bottom: 18px;
    flex-direction: row;
  }
  .tags {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .box {
    width: 100%;
    height: 100%;
  }
  .tag2 {
    inline-size: min-content;
    color: #444444;
    border-radius: 5px;
    padding: 1px 7px;
    font-size: 12px;
    background-color: #c9ffdc;
    margin: 0 7px;
  }
  .tag1 {
    /*    background-color:#900C3F; */
    color: white;
    background-image: linear-gradient(
      -225deg,
      #231557 0%,
      #44107a 29%,
      #ff1361 100%
    );
    border-radius: 5px;
    padding: 2px 7px;
    font-size: 12px;
    margin: 0px 0px 0px 20px;
  }
  h3 {
    font-size: 27px;
  }
  h2 {
    font-size: 23px;
  }

  .posts {
    margin-top: 10px;
    height: 100%;
    width:100%;
  }

  @media screen and (max-width: 810px) {
    .div {
      display: flex;
      flex-direction: column;
      height: 100%;
      align-items: start;
    }

    .div2 {
      display: flex;
      flex-direction: row;
      cursor: pointer;
    }
    .tags {
      display: flex;
      flex-direction: row;
      margin-bottom: 10px;
    }
    .tag1 {
      font-size: 11px;
      margin: 0;
      padding: 1px 3px;
    }
    .tag2 {
      color: #444444;
      border-radius: 5px;
      padding: 1px 3px;
      font-size: 11px;
      background-color: #c9ffdc;
      margin: 0 3px;
    }
    h2 {
      margin: 30px 18px 13px 0px;
    }
    h2:first-child {
      margin: 30px 20px 13px 0px;
    }
    .posts {
      display: flex;
      height: 100%;
      flex-direction: column;
      margin: 0;
    }
  }
  @media screen and (max-width: 400px) {
    .posts {
      margin-top: 10px;
      height: 100%;
    }
    .div2 {
      display: flex;
      flex-direction: column;
      cursor: pointer;
    }
    .tags {
      display: flex;
      width:100%;
      flex-direction: row;
      margin-bottom: 10px;
    }
    .tag1 {
      font-size: 11px;
      margin: 0 5px 0 0;
      padding: 2px 7px;
    }
    .div {
      display: flex;
      flex-direction: column;
      height: 100%;
      width:100%;
      margin-bottom:10px;
      align-items: start;
    }
    .tag2 {
      color: #444444;
      border-radius: 5px;
      padding: 1px 3px;
      font-size: 11px;
      background-color: #c9ffdc;
      margin: 0 3px;
    }
  }
`;

const Home = ({ posts }) => {
  //const tag = posts.tags.split(',');
  // console.log(posts);
  return (
    <>
      <Head>
        <title>Serdev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledDiv>
        <main>
          <h3>Últimos articulos</h3>
          <div className="posts">
            {posts?.map((post) => (
              <Link key={post.slug} href={`/${post.slug}`}>
                <div className="div2">
                  <div className="div">
                    <h2>{post.title}</h2>
                    <p
                      style={{
                        margin: "0",
                        padding: "0",
                        fontSize: "15px",
                        color: "#D3D3D3",
                      }}
                    >
                      {post.descripcion}
                    </p>
                 
                  </div>

                  <div className="tags">
                    <p className="tag1">{post.date}</p>

                    {post.tags?.split(",").map((tag) => (
                      <p key={tag} className="tag2">
                        {tag}
                      </p>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </StyledDiv>
    </>
  );
};

export async function getStaticProps() {
  const unorderedPosts = await getAllFilesMetadata();
  //console.log(posts)
  const posts = unorderedPosts.sort(orderByDate).slice(0, 6);
  return {
    props: { posts },
  };
}

export default Home;
