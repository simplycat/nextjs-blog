import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { getAllPosts } from '../lib/ghost';

export async function getStaticProps() {
  const posts = await getAllPosts();
  return { props: { posts } };
}


export default function Home({ posts }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Rookie adventures in the world of personal privacy & cybersecurity</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.uuid}>
            <Link href={`/${post.slug}`}>
              {post.title}
            </Link>
            {post.date}
          </li>
          ))
        }
        </ul>
      </section>
    </Layout>
  );
}