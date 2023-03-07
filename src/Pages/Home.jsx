import EventCard from "../Components/EventCard"
import { useGetList } from "../Hooks/useGetList"

export default function Home() {
    const { state: event } = useGetList("events", "items")
    return (
        <main>
            {event.slice(0, 1).map((items) => (
                <EventCard key={items.id} data={items} />
            ))}

            <article>
                {event.slice(1, 4).map((items) => (
                    <EventCard key={items.id} data={items} />
                ))}
            </article>
        </main>
    )
}
