/*
Are life-cycle hooks still needed in a fully 
signal based application ?
*/ 

// many life-cycle hooks can be replaced by signals and reactive primitives:
/*
NgOnInit replace by constructor || useEffect()
NgOnChange replace by computed() || useEffect()
NgAfterViewInit replace by useEffect()
NgAfterContentInit replace by useEffect()
NgOnDestroy replace by injecting DestroyRef and listen onDestroy



*/