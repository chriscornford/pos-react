function succeedAlways() {
    return {
        type: 'SUCCEED_ALWAYS',
        meta: {
            offline: {
                effect: { url: '/succeed-always' },
                commit: { type: 'SUCCEED_ALWAYS_SUCCESS' },
                rollback: { type: 'SUCCEED_ALWAYS_FAILURE' }
            }
        }
    };
}

export { succeedAlways };