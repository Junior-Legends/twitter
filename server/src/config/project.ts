interface ProjectConfig {
	isProduction: boolean;
}

const projectConfig: ProjectConfig = {
	isProduction: process.env.NODE_ENV === 'production',
};

export default projectConfig;
