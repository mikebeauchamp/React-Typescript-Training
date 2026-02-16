import { useState } from 'react'

const Tabs = () => {
    const [selectedTab, setSelectedTab] = useState('add')

    const handleTabClick = (tab: string) => {
        setSelectedTab(tab)
    }

    return (
        <>
            <div role="tablist" className="tabs tabs-box tabs-sm flex w-full">
                <a
                    role="tab"
                    className={`tab flex-1 text-center ${selectedTab === 'add' && 'tab-active bg-blue-700 font-bold text-white'}`}
                    onClick={() => handleTabClick('add')}
                >
                    Add Entry
                </a>
                <a
                    role="tab"
                    className={`tab flex-1 text-center ${selectedTab === 'entries' && 'tab-active bg-blue-700 font-bold text-white'}`}
                    onClick={() => handleTabClick('entries')}
                >
                    Journal Entries
                </a>
            </div>
        </>
    )
}

export default Tabs
