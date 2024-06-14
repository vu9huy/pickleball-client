// Data source: https://open.toronto.ca/dataset/scourtt-court-data/
import courts from "./courts.json";

for (let i = 0; i < courts.length; i++) {
    (courts[i]).key = `court-${i}`;
}

export async function loadCourtDataset() {
    // simulate loading the courts from an external source
    return new Promise(resolve => {
        setTimeout(() => resolve(courts), 500);
    });
}

export function getCategories(courts) {
    if (!courts) return [];

    const countByCategory = {};
    for (const court of courts) {
        if (!countByCategory[court.category]) countByCategory[court.category] = 0;
        countByCategory[court.category]++;
    }

    return Object.entries(countByCategory).map(([key, value]) => {
        const label = key.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase());
        return {
            key: key,
            label,
            count: value
        };
    });
}

export default courts;
