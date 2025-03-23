SELECT 
	stack_tech_id,
	COUNT(stack_tech_id) as tech_count,
	stack_tech.type as tech_type,
	stack_tech.icon_name as tech_icon_name,
	stack_tech.name as tech_name
FROM stack_of_project
LEFT JOIN stack_tech
ON stack_tech.id = stack_tech_id
WHERE stack_tech.type = 'frontend'
GROUP BY 
	stack_tech_id, 
	stack_tech.type, 
	stack_tech.icon_name, 
	stack_tech.name
ORDER BY tech_count DESC 
LIMIT 5