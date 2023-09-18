import api from "./api"

export async function getAllCards (): Promise<Card[]> {
  const response = await api.request<Card[]>({
    url: '/api/card',
    method: 'GET',
    headers: {
      'Authorization': localStorage.getItem('token')
    }
  })

  switch (response.status) {
    case 200: return response.data
    case 401: throw new Error('Token inválido, faça o login novamente')
    default: throw new Error('Ocorreu um erro em nossos servidores, tente novamente mais tarde')
  }
}

export async function addNewCard (card: Card): Promise<Card> {
  const response = await api.request<Card>({
    url: '/api/card',
    method: 'POST',
    headers: {
      'Authorization': localStorage.getItem('token')
    },
    data: {
      title: card.title,
      content: card.content,
      column: card.column,
    }})
  switch (response.status) {
    case 200: return response.data
    case 401: throw new Error('Token inválido, faça o login novamente')
    default: throw new Error('Ocorreu um erro em nossos servidores, tente novamente mais tarde')
  }
}

export async function updateCardService (card: Card): Promise<Card[]> {
  const response = await api.request<Card[]>({
    url: `/api/card/${card._id}`,
    method: 'PUT',
    data: {
      title: card.title,
      content: card.content,
      column: card.column,
    },
    headers: {
      'Authorization': localStorage.getItem('token')
    }
  })

  switch (response.status) {
    case 200: return response.data
    case 401: throw new Error('Token inválido, faça o login novamente')
    default: throw new Error('Ocorreu um erro em nossos servidores, tente novamente mais tarde')
  }
}

export async function deleteCard(cardId: string): Promise<void> {
  try {
    const response = await api.request<void>({
      url: `/api/card/${cardId}`,
      method: 'DELETE',
      headers: {
        'Authorization': localStorage.getItem('token'),
      },
    });

    if (response.status === 204) {
      return;
    } else if (response.status === 401) {
      throw new Error('Token inválido, faça o login novamente');
    } else {
      throw new Error('Ocorreu um erro ao excluir o cartão, tente novamente mais tarde');
    }
  } catch (error) {
    throw error;
  }
}
