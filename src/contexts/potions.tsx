import React, {createContext} from 'react';
import * as potions from '../services/potions';

interface potionsReply {
    content: [{
        name: string,
        description: string,
        img: string
    }]
}

interface PotionsContexData{
    getPotions(): Promise<potionsReply>;
}

const PotionsContext = createContext<PotionsContexData>({} as PotionsContexData);

export const PotionsProvider: React.FC = ({ children }) => {
    async function getPotions(): Promise<potionsReply> {
        return new Promise(async (resolve) => {
            var reply: potionsReply = await potions.getPotions();
            resolve(reply);
        });
    }

    return (
        <PotionsContext.Provider value={{ getPotions }}>
            {children}
        </PotionsContext.Provider>
    )
}

export default PotionsContext;