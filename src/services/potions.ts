import api from './api';

interface potionsReply {
    content: [{
        name: string,
        description: string,
        img: string
    }]
}

export function getPotions(): Promise<potionsReply> {
    return new Promise((resolve) => {
        api.get<potionsReply>('/potions').then((response) => {
            resolve(response.data);
        });
    });
}