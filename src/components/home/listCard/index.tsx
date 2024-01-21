import { useRouter } from "next/router"

interface IProps {
    original: string
    short: string
    clicked: number
}

export const ListCard = ({ original, short, clicked }:IProps) => {
    const router = useRouter()
    const handleRoute = () => {
        router.push(`/${short}`)
    }
    return(
        <div className="bg-secondary p-5 transition-all rounded-lg relative hover:cursor-pointer hover:shadow-lg hover:shadow-secondary/40" onClick={handleRoute}>
            <p className="text-xl font-semibold mb-2">{original}</p>
            <div className="flex items-center gap-5">
                <p className="text-lg font-light text-white/40">https/{short}</p>
                <p className="text-lg font-light text-white/40">-</p>
                <p className="text-lg font-light text-white/40">Visited: {clicked}</p>
            </div>
        </div>
    )
}