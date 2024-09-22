function skillsMember() {
    return {
        skills: ['JavaScript', 'React', 'Node', 'Express', 'MongoDB'],
        displaySkills: function() {
            this.skills.forEach((skill, i) => {
                console.log(`Skill ${i + 1}: ${skill}`);
            });
        }
    };
}