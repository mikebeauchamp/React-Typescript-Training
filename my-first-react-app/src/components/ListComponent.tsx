import { useState, type ReactNode } from 'react'

interface ListComponentProps {
    children: ReactNode
    teams: string[]
    onSelectTeam: (team: string) => void
}

const ListComponent = ({
    children,
    teams,
    onSelectTeam
}: ListComponentProps) => {
    const [selectedTeam, setSelectedTeam] = useState(0)

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                {children}
                <ul className="w-1/2 border border-gray-200 rounded-lg divide-y divide-gray-300 overflow-hidden">
                    {teams.map((team, index) => (
                        <li
                            key={index}
                            className={
                                selectedTeam === index
                                    ? 'py-2 px-3 bg-gray-800 text-white'
                                    : 'py-2 px-3'
                            }
                            onClick={() => {
                                setSelectedTeam(index)
                                onSelectTeam(team)
                            }}
                        >
                            {team}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default ListComponent
