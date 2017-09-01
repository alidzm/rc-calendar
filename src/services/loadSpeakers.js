function loadSpeakers (speakersPayload) {
    const speakers = speakersPayload.map(speakerId => {
        return fetch(`http://128.199.53.150/trainers/${speakerId}`);
    });
    return Promise.all(speakers);
}

export default loadSpeakers;
