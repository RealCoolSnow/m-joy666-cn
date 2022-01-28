import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PageTitle from '@/components/common/PageTitle'
import Counter from '@/components/Counter'
import { helloGet2 } from '@/api/common'

type LinkInfo = {
  title: string
  url: string
  color: string
  github?: string
}
const Home: NextPage = () => {
  const list: LinkInfo[] = [
    {
      title: 'Vue3',
      url: 'http://vue.joy666.cn',
      color: '#84cc16',
      github: 'https://github.com/RealCoolSnow/vue3-quick-start',
    },
    {
      title: 'Next.js (React)',
      url: 'http://react.joy666.cn',
      color: '#10b981',
      github: 'https://github.com/RealCoolSnow/nextjs-quick-start',
    },
    {
      title: 'Nest.js (Node)',
      url: 'http://nest.joy666.cn/user',
      color: '#3b82f6',
      github: 'https://github.com/RealCoolSnow/nest-simple-server',
    },
    {
      title: 'DApp Store (Web3)',
      url: 'http://dapp.joy666.cn',
      color: '#6366f1',
      github: 'https://github.com/RealCoolSnow/DAppStore',
    },
    {
      title: 'RabbitMQ',
      url: 'http://mq.joy666.cn',
      color: '#d946ef',
    },
  ]
  const listView = list.map((item) => {
    const textStyle = {
      color: item.color,
    }
    return (
      <div key={item.url} className="my-2">
        <a
          href={item.url}
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-lg"
          style={textStyle}
        >
          {item.title}
        </a>
        {item.github && (
          <a
            className="text-gray-600 ml-2"
            href={item.github}
            target="_blank"
            rel="noreferrer"
          >
            (Github)
          </a>
        )}
      </div>
    )
  })
  return (
    <>
      <PageTitle title="Demos" />
      <div className="flex flex-col items-center mt-8">{listView}</div>
    </>
  )
}

type StaticProps = {
  locale: string
}
export const getStaticProps = async ({ locale }: StaticProps) => {
  console.log(locale)

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default Home
