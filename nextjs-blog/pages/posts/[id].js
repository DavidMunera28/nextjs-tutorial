import Date from '../../components/date';
import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post({ postData }) {
    return (
      <Layout>
        {/* Keep the existing code here */}
  
        {/* Replace {postData.date} with this */}
        <Date dateString={postData.date} />
  
        {/* Keep the existing code here */}
      </Layout>
    );
  }

  export default function Post({ postData }) {
    return (
      <Layout>
        {/* Add this <Head> tag */}
        <Head>
          <title>{postData.title}</title>
        </Head>
  
        {/* Keep the existing code here */}
      </Layout>
    );
  }

export default function Post({ postData }) {
    return (
      <Layout>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Layout>
    );
  }

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id);
  
    return {
      props: {
        postData,
      },
    };
  }