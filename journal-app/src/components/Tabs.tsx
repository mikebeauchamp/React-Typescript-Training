import { useState } from 'react'

interface Props {
    onTabChange?: (tab: string) => void
}

const Tabs = ({ onTabChange }: Props) => {
    const [selectedTab, setSelectedTab] = useState('add')

    const handleTabClick = (tab: string) => {
        setSelectedTab(tab)
        if (onTabChange) {
            onTabChange(tab)
        }
    }

    return (
        <>
            <div role="tablist" className="flex w-full gap-2">
                <a
                    role="tab"
                    className={`flex-1 rounded-lg py-2 text-center font-semibold transition ${selectedTab === 'add' ? 'bg-blue-800 text-white' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
                    onClick={() => handleTabClick('add')}
                >
                    Add Entry
                </a>
                <a
                    role="tab"
                    className={`flex-1 rounded-lg py-2 text-center font-semibold transition ${selectedTab === 'entries' ? 'bg-blue-800 text-white' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
                    onClick={() => handleTabClick('entries')}
                >
                    Journal Entries
                </a>
            </div>
        </>
    )
}

export default Tabs
