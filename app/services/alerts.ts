export const sendEmergencyAlert = async (payload: {
  latitude: number;
  longitude: number;
  petName: string;
}) => {
  try {
    const response = await fetch('http://localhost:3001/api/alerts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    return await response.json();
  } catch (error) {
    return {
      success: false,
      message: 'Falha ao conectar ao backend mock.',
      error,
    };
  }
};
