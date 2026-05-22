"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button, Input, Select, ListBox, SelectTrigger, SelectValue, SelectIndicator, SelectPopover } from "@heroui/react";

const PetsFiltering = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [search, setSearch] = useState(searchParams.get("search") || "");

    const [species, setSpecies] = useState(searchParams.get("species") || null);

    const handleFilter = () => {
        const params = new URLSearchParams();
        if (search) params.append("search", search);
        if (species) params.append("species", species);
        router.push(`/pets?${params.toString()}`);
        router.refresh();
    };

    return (
        <div className="mt-8 mb-6">
            <div className="flex gap-4 justify-center flex-col items-center md:flex-row">
                <Input 
                    label="Search"
                    placeholder="Search by name..." 
                    className="max-w-xs"
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                />

                <Select 
    className="w-[256px]" 
    placeholder="Select species"
    value={species} 
    onChange={(val) => setSpecies(val)}
    aria-label="Species Selection">

    <SelectTrigger>
        <SelectValue />
        <SelectIndicator />
    </SelectTrigger>
    <SelectPopover>
        <ListBox aria-label="Species List">
    <ListBox.Item id="Dog" textValue="Dog">Dog</ListBox.Item>
    <ListBox.Item id="Cat" textValue="Cat">Cat</ListBox.Item>
    <ListBox.Item id="Bird" textValue="Bird">Bird</ListBox.Item>
    <ListBox.Item id="Rabbit" textValue="Rabbit">Rabbit</ListBox.Item>
        </ListBox>
    </SelectPopover>
</Select>

                <Button onClick={handleFilter} color="primary">
                    Apply Filters
                </Button>
            </div>
        </div>
    );
};

export default PetsFiltering;