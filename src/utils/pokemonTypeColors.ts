const typeColors: Record<string, string> = {
    normal: 'bg-gray-300 text-gray-900',
    fire: 'bg-red-400 text-white',
    water: 'bg-blue-400 text-white',
    electric: 'bg-yellow-300 text-yellow-900',
    grass: 'bg-green-400 text-white',
    ice: 'bg-cyan-300 text-cyan-900',
    fighting: 'bg-orange-700 text-white',
    poison: 'bg-purple-500 text-white',
    ground: 'bg-amber-500 text-white',
    flying: 'bg-indigo-300 text-indigo-900',
    psychic: 'bg-pink-400 text-white',
    bug: 'bg-lime-500 text-white',
    rock: 'bg-stone-500 text-white',
    ghost: 'bg-violet-700 text-white',
    dragon: 'bg-indigo-600 text-white',
    dark: 'bg-gray-800 text-white',
    steel: 'bg-slate-400 text-white',
    fairy: 'bg-pink-300 text-pink-900'
}

export function getTypeClass(type: string) {
    return typeColors[type] ?? 'bg-gray-200 text-gray-800'
}