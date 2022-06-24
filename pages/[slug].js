import { MDXRemote } from 'next-mdx-remote'
import { getFileBySlug, getFiles } from '../lib/mdx'
import { PostLayout } from '../layouts/post-layout'

export default function Post({ source, frontmatter }) {
   // console.log(frontmatter);
   /*  const{title, slug,fecha,tags, ...rest} = frontmatter; */
    
    return (
 /*    <Layout type="post" metadata={frontmatter}> */
 <PostLayout>
     <div className="cabecera">
    
        <h1>{frontmatter.title}</h1>
        <div className="tags">
            <span className="tag1">{frontmatter.date}</span>
            {frontmatter.tags?.split(',').map(tag =>
                    <span key={tag} className="tag2">
                      {tag}
                    </span>
                      )}
        </div>

     </div>
        <article>
        <MDXRemote {...source} />
        </article>
 </PostLayout>

        
    /* </Layout> */
   
    )
}

export async function getStaticProps( { params } ) {
    const { source, frontmatter } = await getFileBySlug(params.slug)

    return {
        props: { source, frontmatter }
    }
}

export async function getStaticPaths() {
        const posts = await getFiles();
        const paths = posts.map((post) => ({
            params: { 
                slug: post.replace(/\.mdx/, ""),
            }
        }))

        return {
            paths,
            fallback: false
        }
}

