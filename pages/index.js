import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Image from 'next/image'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter('blog')

    return { props: { posts } }
}

export default function Home({ posts }) {
    return (
        <>
            <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
            <div className="mb-12 flex flex-col items-center gap-x-12 xl:flex-row">

                <div className="pt-6">
                    <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                        Hi, I am{' '}
                        <span className="text-primary-color-500 dark:text-primary-color-dark-500">Faizal Anwar</span>
                    </h1>
                    <h2 className="prose pt-5 text-lg text-gray-600 dark:text-gray-300">
                        {`Welcome to ${siteMetadata.description}. I am a Data Engineer who is passionate about Data Science and Automation. In my free time, I like developing `}
                        side projects and learning new technologies.
                    </h2>
                    <p className="pt-5 text-lg leading-7 text-slate-600 dark:text-slate-300 sm:block md:hidden lg:hidden">
                        This is my place for{' '} mobile thoughts, reflections & everything&nbsp; in between. Have a good read!
                    </p>
                    <p className="hidden pt-10 text-lg leading-7 text-slate-600 dark:text-slate-300 md:block">
                        This is my place for{' '} desktop thoughts, reflections & everything&nbsp;  in between. Have a good read!{' '}
                    </p>
                </div>

                <div className="flex items-center justify-center">
                    <div className="grid grid-cols-1 grid-rows-3 gap-8 py-12">
                        <div className="my-2 grid items-start gap-8">
                            <div className="group relative">
                                <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                                <Link href="/projects">
                                    <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                                        <span className="flex items-center space-x-5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6 -rotate-6 text-green-600"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                                />
                                            </svg>
                                            <span className="pr-6 text-gray-900 dark:text-gray-100">What I built</span>
                                        </span>
                                        <span className="pl-6 text-amber-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                                            Projects&nbsp;&rarr;
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="my-2 grid items-start gap-8">
                            <div className="group relative">
                                <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-fuchsia-600 to-emerald-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                                <Link href="https://naskahkode.com/blog">
                                    <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                                        <span className="flex items-center space-x-5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6 -rotate-6 text-pink-600"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                                />
                                            </svg>
                                            <span className="pr-6 text-gray-900 dark:text-gray-100">Read my story</span>
                                        </span>
                                        <span className="pl-6 text-indigo-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                                            Website&nbsp;&rarr;
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="my-2 grid items-start gap-8">
                            <div className="group relative">
                                <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r  from-pink-600 to-purple-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                                <Link href="https://naskahkode.com/resume.pdf">
                                    <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                                        <span className="flex items-center space-x-5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6 -rotate-6 text-fuchsia-600"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                                />
                                            </svg>
                                            <span className="pr-6 text-gray-900 dark:text-gray-100">
                                                Hire me!&nbsp;&nbsp;&nbsp;
                                            </span>
                                        </span>
                                        <span className="pl-6 text-primary-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                                            Resume&nbsp;&rarr;
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                        Latest
                    </h1>
                    <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                        {siteMetadata.description}
                    </p>
                </div>




                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {!posts.length && 'No posts found.'}
                    {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
                        const { slug, date, title, summary, tags, image } = frontMatter
                        return (
                            <li key={slug} className="py-12">
                                <article>
                                    <div className="flex flex-col items-stretch space-y-2 xl:grid xl:grid-cols-3 xl:items-baseline xl:gap-4 xl:space-y-0">
                                        <div className="w-full space-y-5 self-center">
                                            <Link href={`/blog/${slug}`}>
                                                <Image
                                                    className="w-full object-cover hover:brightness-105"
                                                    alt={slug}
                                                    src={`/static/${image}`}
                                                    layout="responsive"
                                                    width={800}
                                                    height={450}
                                                />
                                            </Link>
                                        </div>
                                        <div className="space-y-5 xl:col-span-2">
                                            <div className="space-y-6">
                                                <div>
                                                    <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                                        <Link
                                                            href={`/blog/${slug}`}
                                                            className="text-gray-900 dark:text-gray-100"
                                                        >
                                                            {title}
                                                        </Link>
                                                    </h2>
                                                    <div className="flex flex-wrap">
                                                        {tags.map((tag) => (
                                                            <Tag key={tag} text={tag} />
                                                        ))}
                                                    </div>
                                                    <dl>
                                                        <dt className="sr-only">Published on</dt>
                                                        <dd className="text-xs font-medium leading-6 text-gray-500 dark:text-gray-400">
                                                            <time dateTime={date}>{formatDate(date)}</time>
                                                        </dd>
                                                    </dl>
                                                </div>
                                                <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                                                    {summary}
                                                </div>
                                            </div>
                                            <div className="text-base font-medium leading-6">
                                                <Link
                                                    href={`/blog/${slug}`}
                                                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                                    aria-label={`Read "${title}"`}
                                                >
                                                    Read more &rarr;
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </li>
                        )
                    })}
                </ul>
            </div>
            {posts.length > MAX_DISPLAY && (
                <div className="flex justify-end text-base font-medium leading-6">
                    <Link
                        href="/blog"
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label="all posts"
                    >
                        All Posts &rarr;
                    </Link>
                </div>
            )}
            {siteMetadata.newsletter.provider !== '' && (
                <div className="flex items-center justify-center pt-4">
                    <NewsletterForm />
                </div>
            )}
        </>
    )
}
