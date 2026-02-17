import { useEffect } from 'react'

const UseDocumentHead = ({
    title,
    description
}: {
    title: string
    description: string
}) => {
    useEffect(() => {
        document.title = title

        // Find or create the meta description tag
        let metaDescription = document.querySelector('meta[name="description"]')
        if (!metaDescription) {
            metaDescription = document.createElement('meta')
            metaDescription.setAttribute('name', 'description')
            document.head.appendChild(metaDescription)
        }
        metaDescription.setAttribute('content', description)
    }, [title, description])
}

export default UseDocumentHead
