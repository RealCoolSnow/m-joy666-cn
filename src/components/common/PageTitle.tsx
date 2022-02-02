import Head from 'next/head'

type Props = {
  title: string
}

const PageTitle = ({ title }: Props) => {
  return (
    <Head>
      <title>{title} - joy666.cn</title>
    </Head>
  )
}

export default PageTitle
