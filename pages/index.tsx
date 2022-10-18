import Head from 'next/head'
import Link from 'next/link'
import {supabase} from './utils/supabase.js'

export default function Home({lessons}) {
  console.log({lessons})
  return (
    <div className="">
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='w-full max-w-3xl mx-auto my-16 px-2'>
          {lessons.map(lesson => (
        <Link key={lesson.id} href={`/${lesson.id}`}><a className='p-8 h-40 mb-4 rounded shadow text-xl flex'>{lesson.title}</a></Link>
        ))}

      </div>
        
      </main>

      <footer className="">
       
      </footer>
    </div>
  )
}

export const getStaticProps = async () => {
  const {data: lessons} = await supabase.from('lesson').select('*')
  return {
    props: {
      lessons
    }
  }
} 
