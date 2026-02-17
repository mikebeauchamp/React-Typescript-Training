import { useParams } from 'react-router-dom'
import UseDocumentHead from '../hooks/UseDocumentHead.tsx'

const Blog = () => {
    const { category, id } = useParams()

    UseDocumentHead({
        title: 'My page title',
        description: 'My page description'
    })

    return (
        <div className="flex flex-col container py-8 px-4">
            <h1 className="text-3xl font-bold">Blog Page</h1>
            <p className="">Category: {category}</p>
            <p className="">ID: {id}</p>
        </div>
    )
}

export default Blog
