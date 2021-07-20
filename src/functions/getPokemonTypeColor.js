export default function getPokemonTypeColor(type) {
  let typeColor = '';
  switch (type) {
    case 'grass': {
      typeColor = 'text-green-900';
      break;
    }

    case 'bug': {
      typeColor = 'text-lime-500';
      break;
    }

    case 'dark': {
      typeColor = 'text-gray-800';
      break;
    }

    case 'dragon': {
      typeColor = 'text-indigo-400';
      break;
    }

    case 'electric': {
      typeColor = 'text-amber-500';
      break;
    }

    case 'fairy': {
      typeColor = 'text-rose-400';
      break;
    }

    case 'fighting': {
      typeColor = 'text-indigo-500';
      break;
    }

    case 'fire': {
      typeColor = 'text-red-400';
      break;
    }

    case 'flying': {
      typeColor = 'text-blue-400';
      break;
    }

    case 'ghost': {
      typeColor = 'text-indigo-500';
      break;
    }

    case 'ground': {
      typeColor = 'text-yellow-800';
      break;
    }

    case 'ice': {
      typeColor = 'text-blue-300';
      break;
    }

    case 'normal': {
      typeColor = 'text-pink-300';
      break;
    }

    case 'poison': {
      typeColor = 'text-purple-700';
      break;
    }

    case 'psychic': {
      typeColor = 'text-pink-500';
      break;
    }

    case 'rock': {
      typeColor = 'text-yellow-900';
      break;
    }

    case 'steel': {
      typeColor = 'text-blueGray-500';
      break;
    }

    case 'water': {
      typeColor = 'text-blue-500';
      break;
    }

    default: {
      typeColor = 'text-green-900';
      break;
    }
  }

  return typeColor;
}
