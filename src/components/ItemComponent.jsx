import React from 'react';

const ItemComponent = props => {
  return (
    <div>
      <div className="form-group">
        Item ID
        <input
          onChange={props.onInputChange}
          autoComplete="off"
          className="input-group__field ui-autocomplete-input"
          type="text"
          name="item_id"
          placeholder="123412341234"
          value={props.item_id} />
      </div>
    </div>
  )
};

ItemComponent.propTypes = {
  onInputChange: React.PropTypes.func.isRequired,
  item_id: React.PropTypes.string,
};

export default ItemComponent;
