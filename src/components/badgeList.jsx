/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

let badgeColor = (type) => {
  switch (type) {
    case "Action":
      return "bg-red-500";
    case "Indie":
      return "bg-indigo-400";
    case "Adventure":
      return "bg-amber-400";
    case "RPG":
      return "bg-orange-400";
    case "Strategy":
      return "bg-amber-700";
    case "Shooter":
      return "bg-rose-500";
    case "Casual":
      return "bg-teal-500";
    case "Simulation":
      return "bg-neutral-600";
    case "Puzzle":
      return "bg-emerald-300";
    case "Arcade":
      return "bg-sky-500";
    case "Platformer":
      return "bg-zinc-600";
    case "Massively Multiplayer":
      return "bg-violet-500";
    case "Racing":
      return "bg-lime-500";
    case "Sports":
      return "bg-green-500";
    case "Fighting":
      return "bg-fuchsia-300";
    case "Family":
      return "bg-cyan-500";
    case "Board Games":
      return "bg-purple-300";
    case "Educational":
      return "bg-pink-400";
    case "Card":
      return "bg-gray-950";
    default:
      break;
  }
};

function BadgeList({ bagsList }) {
  const listItems = bagsList.map((badge) => (
    <li
      key={badge.id}
      className={
        "inline-flex items-center   gap-1.5 py-1.5 px-3 rounded-md bg- text-xs font-mediu text-white " +
        badgeColor(badge.name)
      }
    >
      {badge.name}
    </li>
  ));
  return <ul className="flex flex-wrap gap-2">{listItems}</ul>;
}

export default BadgeList;
