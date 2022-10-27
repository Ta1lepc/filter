import React, {useState} from 'react'
import Toolbar from './Toolbar'
import ProjectList from './ProjectList'

function Portfolio() {
	const [selected, setSelected] = useState("All")
	const filters = ["All", "Websites", "Flayers", "Business Cards"]
	const onSelectFilter = ((filter) => {
		setSelected(filters[filter])
	})

	return (
		<div className="container">
			<Toolbar filters = {filters}
			selected={selected}
			onSelectFilter={onSelectFilter} />
			<ProjectList selected={selected} />
		</div>
	);
}

export default Portfolio