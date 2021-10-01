const printf = async (dfstr, repchar, repstrs) => {
	for await (const str of repstrs) {
		dfstr = dfstr.replace(repchar, str);
	}

	return dfstr;
}

module.exports = printf;