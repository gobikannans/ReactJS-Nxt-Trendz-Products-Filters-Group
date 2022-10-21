import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    onSearchValue,
    searchInput,
    enterSearchInput,
    onChangeCategory,
    onChangeRating,
    onClearFilter,
  } = props

  const onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onSearchInput = event => {
    onSearchValue(event.target.value)
  }

  const renderSearchInput = () => (
    <div className="input-container">
      <input
        type="search"
        placeholder="Search"
        className="search-input"
        onChange={onSearchInput}
        onKeyDown={onEnterSearchInput}
        value={searchInput}
      />
      <BsSearch />
    </div>
  )

  const renderCategoryList = () => {
    const {categoryDetails} = props

    return categoryDetails.map(category => {
      const {activeCategoryId} = props
      const isActive = activeCategoryId === category.categoryId
      const activeStyle = isActive ? 'category-active-name' : 'category-nr-name'

      const onUpdateCategory = () => {
        onChangeCategory(category.categoryId)
      }

      return (
        <li
          className="category-list-container"
          key={category.categoryId}
          onClick={onUpdateCategory}
        >
          <p className={activeStyle}>{category.name}</p>
        </li>
      )
    })
  }

  const renderCategory = () => (
    <div>
      <h1 className="category-heading">Category</h1>
      {renderCategoryList()}
    </div>
  )

  const renderRatingList = () => {
    const {ratingDetails} = props

    return ratingDetails.map(rating => {
      const {activeRatingId} = props
      const isActive = activeRatingId === rating.ratingId
      const activeStyle = isActive ? 'rating-active-name' : 'rating-nr-name'

      const onUpdateRating = () => {
        onChangeRating(rating.ratingId)
      }

      return (
        <li
          className="rating-list-container"
          key={rating.ratingId}
          onClick={onUpdateRating}
        >
          <img
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
            className="rating-img"
          />
          <p className={activeStyle}>& up</p>
        </li>
      )
    })
  }

  const renderRating = () => (
    <div>
      <h1 className="rating-heading">Rating</h1>
      {renderRatingList()}
    </div>
  )

  const onUpdateFilter = () => {
    onClearFilter()
  }

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderCategory()}
      {renderRating()}

      <button
        type="button"
        className="filter-btn-style"
        onClick={onUpdateFilter}
      >
        Clear filters
      </button>
    </div>
  )
}

export default FiltersGroup
