import type { TagListProps } from "../data/portfolio";

export function TagList({ tags }: TagListProps) {
  return (
    <ul className="tag-list" aria-label="Technologies and themes">
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}
