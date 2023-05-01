import React, { useState } from 'react';
import { Picker } from 'emoji-mart';
import 'emoji-mart/dist/emoji-mart.css';

function EmojiSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search for an emoji"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <Picker
        set="twitter"
        title=""
        emoji=""
        style={{ width: '100%', marginTop: '20px' }}
        onSelect={(emoji) => console.log(emoji)}
        perLine={8}
        showPreview={false}
        showSkinTones={false}
        autoFocus={true}
        skin={1}
        include={['recent', 'smileys', 'people', 'animals', 'food', 'activities', 'travel', 'objects', 'symbols', 'flags']}
        exclude={['search', 'flags']}
        i18n={{ search: 'Search', categories: { recent: 'Frequently Used' } }}
        emojiTooltip={true}
      />
    </div>
  );
}

export default EmojiSearch;
