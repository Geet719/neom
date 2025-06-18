export default function truncateName(name, maxLength) {
    return name.length > maxLength ? name.substring(0, maxLength) + "..." : name;
}

