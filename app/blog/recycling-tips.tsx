import Link from "next/link"

export default function RecyclingTips() {
  return (
    <article className="prose mx-auto my-12">
      <h1>Top 5 Recycling Tips for a Greener Planet</h1>
      <ol>
        <li><strong>Know What to Recycle:</strong> Check your local recycling guidelines to know which materials are accepted. Common recyclables include paper, cardboard, glass, and certain plastics.</li>
        <li><strong>Clean Your Recyclables:</strong> Rinse containers to remove food residue. Dirty items can contaminate entire batches of recycling.</li>
        <li><strong>Avoid Wishcycling:</strong> Don’t put non-recyclable items in the bin hoping they’ll be recycled. This can cause problems at recycling facilities.</li>
        <li><strong>Reduce and Reuse First:</strong> Recycling is important, but reducing waste and reusing items is even better for the environment.</li>
        <li><strong>Spread the Word:</strong> Share recycling tips with friends and family to help your community recycle better!</li>
      </ol>
      <p>Want more tips? Visit our <Link href="/forum">forum</Link> to join the discussion!</p>
    </article>
  )
}
